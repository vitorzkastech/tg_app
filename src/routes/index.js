import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import Logar from '../pages/Logar';
import Register from '../pages/Register';
import TaskList from '../pages/TaskList';
import Menu from '../pages/Menu';
import Metas from '../pages/Metas';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
      <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
        />
 
        <Stack.Screen
            name="Logar"
            component={Logar}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
        />

        <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{ headerShown: false }}
        />

        <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
        />

        <Stack.Screen
        name="Metas"
        component={Metas}
        options={{ headerShown: false }}
        />


      </Stack.Navigator>
    )
}