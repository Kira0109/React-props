import FullName from './src/fullName.js';
import Bio from './src/bio.js'
import Profession from './src/profession.js'

export default function Profile() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div>  <a href="#" onClick={handleClick}>
      Click me
    </a>
    <FullName name="Mohamed Khalil Cheguenni"/>
    <Bio Yours ="'nothing to say..'"/>
<Profession something="Student"/>
    </div>
  
  );
}