import { Stack } from "expo-router/stack";
import { AppContextProvider } from "../../context/AppContext";

export default function Layout() {
  return (
    <AppContextProvider>
      <Stack
        initialRouteName="home"
        screenOptions={{
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <Stack.Screen
          name="edit"
          options={{
            headerTitle: "Edit",
          }}
        />
      </Stack>
    </AppContextProvider>
  );
}
