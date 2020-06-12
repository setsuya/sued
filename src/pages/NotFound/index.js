import React from 'react';

export default function NotFound() {  
  return (
    <>
      <div className="row py-4 px-2">
        <div className="col">
          <h3>404 - Page Not Found</h3>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <hr className="border-info" />
        </div>
      </div>
      <div className="row py-4 px-2">
        <div className="col">
          <a href="/home" className="text-white">Return home</a>
        </div>
      </div>
    </>
  );
}