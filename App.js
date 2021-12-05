import React from 'react';    
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import Splash from './screens/SplashScreen';  
import TaskMonitor from './screens/TaskMonitor';
import Filter from './screens/FilterScreen';
import Project from './screens/Project';
import Dept from './screens/Department';
import Resource from './screens/Resource';
import Equi from './screens/Equipment';

const AppNavigator = createStackNavigator(  
    {  
      SplashScreen: {screen:Splash},

      TaskMonitorScreen: {screen:TaskMonitor},

      FilterScreen: {screen:Filter},

      Project: {screen:Project},
      
      Department: {screen:Dept},

      Resource: {screen:Resource},

      Equipment: {screen:Equi},

    },  
    {  
        initialRouteName: 'SplashScreen'  
    }  
);  
export default createAppContainer(AppNavigator);  
