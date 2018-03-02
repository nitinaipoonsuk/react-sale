import React from "react"
import { Root } from "native-base"
import { StackNavigator, DrawerNavigator } from "react-navigation"

import Login from "./screens/login"
import SideBar from "./screens/sidebar"
import JobList from "./screens/job-list"
import JobDetails from "./screens/job-details"
import ReceiveGoods from "./screens/receive-goods"

const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    JobList: { screen: JobList }
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
)

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    JobDetails: { screen: JobDetails },
    ReceiveGoods: { screen: ReceiveGoods }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
)

export default () =>
  <Root>
    <AppNavigator />
  </Root>