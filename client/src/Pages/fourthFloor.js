import React from 'react'
import MainLayout from '../layout/MainLayout'
import PlotTest from '../components/PlotTest'

function fourthFloor() {
    return (
        <div>
            <MainLayout>
                <div>Fourth Floor</div>
                <PlotTest Floor_Name="Fourth_Floor" />
            </MainLayout>
        </div>
    )
}

export default fourthFloor