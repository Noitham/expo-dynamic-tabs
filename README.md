# expo-dynamic-tabs

Repository containing a minimal reproducible example for investigating the generation of dynamic tabs using expo-router (v3)
  

Following up issue on: https://github.com/expo/expo/issues/27377


Basically, given an array, f. ex:

```
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
  ```
  
I'm trying to generate a `Tab` navigator creating a tab for each of the items:
  
```
...
...
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
```

Unfortunately, I haven't been able to achieve so, nor I haven't been able to find specific docs regarding this.
There are various other issues, but there isn't a clear answer to it:

https://github.com/expo/expo/issues/26187
https://github.com/expo/router/issues/522
