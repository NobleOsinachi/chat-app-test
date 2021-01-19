# Chat App Test

### Todos:

- [x] Allow user to Login (using local dummy data)
- [x] Persist login state.
- [ ] Display a list of contacts.
- [ ] Allow the user to "chat" to contacts.
- [ ] Persist chats.

### Comments:

This task was rushed and as such there are many things that would be done differently if this was a production app:

- The entire app would be either wrapped in Redux Provider or Context Provider, that way state would be easily shareable and would avoid prop drilling that has sort of been carried out with the `user` state being passed through the navigation props.
- Api calls would happen in side effects, either using redux-saga or custom middleware. This is based on the earlier point of using `redux` or `useReducer` which would allow us to dispatch our actions to be handled separately.
- Rehydrating of the `user` state would be carried in the route component or an init function along with any other state rather than carrying this out in the `Login` component.
- Typescript types haven't fully been fleshed out, neither have they been organised properly for easier reuse. (The navigation props for `react-navigation` have essentially been skipped at this point :( ).
- UI Components would be more unified and organised better, so that they could be shared with the different screens more easily.
- Loading screens haven't been added.

### Screenshots

<img width="497" alt="Screenshot 2021-01-19 at 14 03 26" src="https://user-images.githubusercontent.com/5185319/105045832-40798c80-5a60-11eb-99ae-276767e75b89.png">

![chat-login](https://user-images.githubusercontent.com/5185319/105045857-466f6d80-5a60-11eb-878a-3df43285ec3f.gif)

### Logins

| Username        | Password |
| --------------- | -------- |
| zero@zero.com   | zero     |
| one@one.com     | one      |
| two@two.com     | two      |
| three@three.com | three    |
