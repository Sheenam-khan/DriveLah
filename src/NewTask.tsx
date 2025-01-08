import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

// Styled Components
const Sidebar = styled.div`
  width: 300px;
  background: #f4f4f4;
  padding: 20px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`;

const MainContent = styled.div`
  margin-left: 320px;
  padding: 20px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const ListItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

// Types
// interface Provider {
//   name: string;
//   preferred: boolean;
//   slug: string;
// }

interface ApiDetails {
  info: {
    title: string;
    description: string;
    version: string;
  };
}

// Sidebar Component
const SidebarComponent = ({ providers, onSelect , onCancel}: { providers:string[] ; onSelect: (provider: string) => void; onCancel: () => void }) => {
  return (
    <Sidebar>
      <h3>API Providers</h3> 
      <Button onClick={onCancel}>X</Button>
      {providers.map((provider,index) => (
        <ListItem key={`${provider}-${index}`} onClick={() => onSelect(provider)}>
          {provider}
        </ListItem>
      ))}
    </Sidebar>
  );
};

// API Explorer
const ApiExplorer = () => {
  const [providers, setProviders] = useState<[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [apis, setApis] = useState<Record<string, ApiDetails>>({});
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

const fetchProviders=async()=>{
 const response= await axios.get('https://api.apis.guru/v2/providers.json');
console.log("hello sheenam",response)
   if(response?.data?.data?.length && response.status==200){
//  const providerList = Object.entries(response.data).map(([slug, details]: any) => ({
//   name: details.name,
//   preferred: details.preferred,
//   slug,
// }));
const providerList=response.data.data
setProviders(providerList);
   }

}

  useEffect(() => {
fetchProviders()
  }, []);

  const fetchApis = (provider: string) => {
    axios.get(`https://api.apis.guru/v2/${provider}.json`).then((response) => {
      setApis(response.data.apis);
      setSelectedProvider(provider);
    });
  };

  return (
    <div>
      {openDrawer && <SidebarComponent providers={providers} onSelect={fetchApis}  onCancel={()=>setOpenDrawer(false)}/>}
      <MainContent>
        <h2>Web APIs</h2>
        <Button onClick={()=>setOpenDrawer(true)}>Explore</Button>
        {selectedProvider && (
          <div>
            <h3>APIs for {selectedProvider}</h3>
            {Object.entries(apis)?.map(([key, api]: [string, ApiDetails]) => (
              <Link to={`/api/${selectedProvider}/${key}`} key={key}>
                <ListItem>{api.info.title}</ListItem>
              </Link>
            ))}
          </div>
        )}
      </MainContent>
    </div>
  );
};

// API Details Screen
const ApiDetailsScreen = () => {
  const [details, setDetails] = useState<ApiDetails | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = window.location.pathname;
    const [, , provider, apiKey] = pathname.split('/');
    axios.get(`https://api.apis.guru/v2/${provider}.json`).then((response) => {
      debugger
      setDetails(response.data.apis[apiKey]);
    });
  }, []);

  return (
    <MainContent>
      <Button onClick={() => navigate(-1)}>Back</Button>
      {details && (
        <div>
          <h2>{details.info.title}</h2>
          <p>{details.info.description}</p>
          <p>Version: {details.info.version}</p>
        </div>
      )}
    </MainContent>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApiExplorer />} />
        <Route path="/api/:provider/:apiKey" element={<ApiDetailsScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
