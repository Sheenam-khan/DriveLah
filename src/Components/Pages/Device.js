import React, { Fragment, useState, useEffect } from 'react'
import { devicesArr } from '../../utils/data';

const Device = props => {
  const deviceAr = JSON.parse(localStorage.getItem('devices')) || devicesArr;
  const [devices, setDevices] = useState(deviceAr)

  useEffect(() => {
    localStorage.setItem('devices', JSON.stringify(devices));
  }, [devices]);
  const onChange = (e, item, value = '') => {
    const updatedDevices = devices?.map(device => ({ ...device, ...({ [e.target.name]: item?.deviceId === device?.deviceId ? e.target.name == 'uploadedImage' ? value : e.target.name == 'ownDevice' ? e.target?.checked : e.target?.value : device[e.target.name] }) }))
    setDevices(updatedDevices)
  }

  return (
    <Fragment>
      <main className="main-content">
        <h1>Device Management</h1>
        <p>Add details of the device, if any already installed on your car. If none, then continue to next step.</p>
        <section className="device-section">
          <form>
            {devices?.map((item, index) =>
            (
              <div className="device" key={index}>
                <div className='device-type'>
                  <div>
                    <h2>{item?.name}</h2>
                    <label for="device-type-2">Device type</label>
                    <select id="device-type-2" name="deviceType" value={item?.deviceType} placeholder="Select device type"
                      onChange={(e) => onChange(e, item)}>
                      {item?.deviceTypes?.map((device, deviceIndex) =>
                        <option key={deviceIndex} value={device?.id}>{device?.name}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <label
                      for="bring-your-own-2"
                    >Bringing your own device?
                      <label className="switch">
                        <input
                          type="checkbox"
                          id="bring-your-own-2"
                          name="ownDevice"
                          defaultChecked={item?.ownDevice}
                          onChange={(e) => onChange(e, item)}
                        />

                        <span className="slider"></span>
                      </label>
                    </label>

                    <p className="info">Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.</p>
                  </div>
                </div>
                {item?.ownDevice &&
                  <div className='serial'>
                    <div>
                      <label for="serial-number-2">Serial number</label>
                      <input type="text" id="serial-number-2" placeholder="Enter the serial number of the device"
                        defaultValue={item?.serialNumber}
                        name="serialNumber"
                        onChange={(e) => onChange(e, item)}
                      />
                    </div>
                    <div className="uploadfile">
                      <label for="upload-2">Upload an image of the device</label>
                      <div>
                        <input id="upload-2" type="file"
                          name="uploadedImage"
                          placeholder="Click to upload" accept="image/*" onChange={(e) => {
                            const file = e.target.files?.[0];

                            if (file !== undefined) {
                              const fileURL = URL.createObjectURL(file);
                              onChange(e, item, {
                                fileName: file.name,
                                url: fileURL,
                              })

                            }
                          }} />
                        {item?.uploadedImage?.url?.length && (
                          <img
                            src={item?.uploadedImage?.url}
                            alt="preview"
                            className="h-64 w-full object-contain"
                            width={350}
                            height={100}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                }

              </div>
            ))}
          </form>
        </section>
      </main>
    </Fragment>
  )
}

export default Device