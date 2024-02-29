import {Tabs} from 'expo-router';

type NestedTab = {
  id: string;
  title: string;
  description: string
}

export default function Layout() {

  const nestedTabs: NestedTab[] = [
    {
      id: "1",
      title: "Nested tab 1",
      description: "Hello, I'm the nested tab 1",
    },
    {
      id: "2",
      title: "Nested tab 2",
      description: "Hello, I'm the nested tab 2",
    },
    {
      id: "3",
      title: "Nested tab 3",
      description: "Hello, I'm the nested tab 3",
    }
  ]
  // This could be, fx. data fetched from our API.
  // How can we achieve generating the tabs based on an array?

  return (
    <Tabs>
      {nestedTabs.map(tab => {
        return (
          <Tabs.Screen
            key={tab.id}
            name={tab.id}
            options={{
              href: {
                pathname: "/[id]",
                params: {
                  id: tab.id,
                },
              },
              title: tab.title,
            }}
          />
        )
      })}
    </Tabs>
  )
}
