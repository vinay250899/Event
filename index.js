/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import adm_home from './adm_home';
import navigation from './navigation';
import fb from './fb';
import create_usr from './create_usr';
import all_usr from './all_usr';
import Log_out from './Log_out';
import mod_usr from './mod_usr';
import user_home from './user_home';
import add_part_usr from './add_part_usr';
import view_part_usr from './view_part_usr';

AppRegistry.registerComponent(appName, () => navigation);
