import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import UserListScreen from "./src/components/screens/UserListScreen";
import UserAddScreen from "./src/components/screens/UserAddScreen";
import UserViewScreen from "./src/components/screens/UserViewScreen";
import UserModifyScreen from "./src/components/screens/UserModifyScreen";

const ModuleStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ModuleStackNavigator() {
  return (
    <ModuleStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
      }}
    >
      <ModuleStack.Screen
        name="ModuleListScreen"
        component={ModuleListScreen}
        options={{ title: "List modules" }}
      />

      <ModuleStack.Screen
        name="ModuleAddScreen"
        component={ModuleAddScreen}
        options={{ title: "Add module" }}
      />

      <ModuleStack.Screen
        name="ModuleViewScreen"
        component={ModuleViewScreen}
        options={{ title: "View module" }}
      />

      <ModuleStack.Screen
        name="ModuleModifyScreen"
        component={ModuleModifyScreen}
        options={{ title: "Modify module" }}
      />
    </ModuleStack.Navigator>
  );
}

function UserStackNavigator() {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
      }}
    >
      <UserStack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{ title: "List users" }}
      />
      <UserStack.Screen
        name="UserAddScreen"
        component={UserAddScreen}
        options={{ title: "Add user" }}
      />
      <UserStack.Screen
        name="UserViewScreen"
        component={UserViewScreen}
        options={{ title: "View user" }}
      />
      <UserStack.Screen
        name="UserModifyScreen"
        component={UserModifyScreen}
        options={{ title: "Modify user" }}
      />
    </UserStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ModuleCrudler"
        screenOptions={{
          headerShown: { backgroundColor: "white" },
          headerTintColor: "black",
        }}
      >
        <Drawer.Screen
          name="ModuleCrudler"
          component={ModuleStackNavigator}
          options={{ title: "Module CRUDler" }}
        />
        <Drawer.Screen
          name="UsersCrudler"
          component={UserStackNavigator}
          options={{ title: "User CRUdler" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
