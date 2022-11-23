import React from 'react';
import staringCat from './image/cat-2083492_1280.jpg';
import Image from './Image';

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source={ staringCat } alternativeText="Cute cat staring" />
      </main>
    );
  }
}

export default App;