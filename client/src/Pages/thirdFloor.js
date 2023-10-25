import React from 'react'
import MainLayout from '../layout/MainLayout'
import PlotTest from '../components/PlotTest'

function thirdFloor() {
    return (
        <div>
            <MainLayout>
                <div>Third Floor</div>
                <PlotTest Floor_Name="Third_Floor" />
            </MainLayout>
        </div>
    )
}

export default thirdFloor