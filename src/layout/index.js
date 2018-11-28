import './base';
import './grid';
import './header';
import './footer';


export default () => {
  console.log(location.href);

  if (location.href !== "http://localhost:3000/") {
    $('header, footer').addClass('hidden');
  }
};
