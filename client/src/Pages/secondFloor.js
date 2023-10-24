import React from 'react'
import MainLayout from '../layout/MainLayout'
import PlotTest from '../components/PlotTest'


function secondFloor() {
  return (
    <div>
      <MainLayout>
        <div>Second Floor</div>
        <PlotTest Floor_Name="Second_Floor"/>
      </MainLayout>
    </div>
  )
}

export default secondFloor