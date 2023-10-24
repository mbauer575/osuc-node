import React from 'react'
import MainLayout from '../layout/MainLayout'
import PlotTest from '../components/PlotTest'


function secondFloor() {
  return (
    <div>
      <MainLayout>
        <div>Second Floor</div>
        <PlotTest />
      </MainLayout>
    </div>
  )
}

export default secondFloor