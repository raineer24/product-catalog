import React from 'react';
import Card from './components/Card';

function App() {


  return (
   <div>
    <Card
      title="Welcome"
      content={<p>This is a reusable card component.</p>}
      footer={<small>Updated just now</small>}
      onClick={() => alert('Card clicked')}
    />
   </div>
      
  )
}

export default App
