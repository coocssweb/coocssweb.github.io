import './scss/home.scss';
import App from './app';
import router from './router';
import Loading from './modules/loading';

this._app = new App({router});
this._app._router.init();
