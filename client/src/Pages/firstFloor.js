import React from 'react'
import MainLayout from '../layout/MainLayout'
import PlotTest from '../components/PlotTest'

function firstFloor() {
  return (
    <MainLayout>
      <div>First Floor</div>
      <PlotTest Floor_Name="First_Floor" />
    </MainLayout>
  )
}

export default firstFloor