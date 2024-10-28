/* eslint-disable */
import React ,{Component} from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    console.log(error);

     if (/Loading chunk [\d]+ failed/.test(error.toString())) {
          if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(names => {
            for (const name of names) caches.delete(name);
          });
        }
    window.location.reload();
  }
    
    this.setState({
      error,
      errorInfo,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo, error } = this.state
    const { children } = this.props
    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return children
  }
}

export default ErrorBoundary
