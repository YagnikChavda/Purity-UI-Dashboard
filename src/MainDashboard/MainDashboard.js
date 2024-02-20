import React from 'react'
import DashboardBoxRow from './DashboardBoxRow'
import DashboardBoxProjectsRow from './DashboardBoxProjectsRow'
import DashboardProjectList from './DashboardProjectList';

import './MainDashboard.scss';
import { CommonHeader } from '../UICoponents/CommonHeader';
import StoreViewChart from '../UICoponents/StoreViewChart';
import { DashboardBoxCharts } from './DashboardBoxCharts';

export default function MainDashboard() {
   return (
      <>
         <CommonHeader pageTitle="Dashboard"/>
         <DashboardBoxRow />
         <DashboardBoxProjectsRow />
         <DashboardBoxCharts />
         <DashboardProjectList />
      </>
   )
}
