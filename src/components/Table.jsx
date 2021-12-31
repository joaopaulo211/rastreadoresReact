import React from "react";
import data from "../data/data_report";
import "../App.css"

export default () => {

    function getLines() {
        return data.map(rastreadores => {
            return (
                <tr key={rastreadores.nome}>
                    <th>{rastreadores.nome}</th>
                    <td>{rastreadores.id}</td>
                    <td>{rastreadores.did}</td>
                    <td>{rastreadores.acc}</td>
                    <td>{rastreadores.act}</td>
                    <td>{rastreadores.acc_psql}</td>
                    <td>{rastreadores.cat}</td>
                    <td>{rastreadores.ttl}</td>
                    <td>{rastreadores.lat}</td>
                    <td>{rastreadores.lng}</td>
                    <td>{rastreadores.ign}</td>
                    <td>{rastreadores.spd}</td>
                    <td>{rastreadores.dis}</td>
                    <td>{rastreadores.hmt}</td>
                    <td>{rastreadores.dir}</td>
                    <td>{rastreadores.fix}</td>
                    <td>{rastreadores.org}</td>
                    <td>{rastreadores.his}</td>
                    <td>{rastreadores.pv}</td>
                    <td>{rastreadores.bbv}</td>
                    <td>{rastreadores.sc}</td>
                    <td>{rastreadores.gsm}</td>
                    <td>{rastreadores.bl}</td>
                    <td>{rastreadores.cb}</td>
                    <td>{rastreadores.loc}</td>
                    <td>{rastreadores.sv}</td>
                    <td>{rastreadores.md}</td>
                    <td>{rastreadores.mod}</td>
                    <td>{rastreadores.mn}</td>
                    <td>{rastreadores.i1}</td>
                    <td>{rastreadores.i2}</td>
                    <td>{rastreadores.i3}</td>
                    <td>{rastreadores.o1}</td>
                    <td>{rastreadores.o2}</td>
                    <td>{rastreadores.alt}</td>
                    <td>{rastreadores.oil}</td>
                    <td>{rastreadores.vl}</td>
                    <td>{rastreadores.rfid}</td>
                    <td>{rastreadores.mcc}</td>
                    <td>{rastreadores.mnc}</td>
                    <td>{rastreadores.lac}</td>
                    <td>{rastreadores.cid}</td>
                    <td>{rastreadores.ttf}</td>
                    <td>{rastreadores.ctf}</td>
                    <td>{rastreadores.ctm}</td>
                    <td>{rastreadores.rpm}</td>
                    <td>{rastreadores.msg}</td>
                    <td>{rastreadores.tag}</td>
                    <td>{rastreadores.val}</td>
                    <td>{rastreadores.alarmAcc}</td>
                </tr>
            )
        })
    }

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Informação enviada / Modelo</th>
                        <th>Database ID</th>
                        <th>Device ID</th>
                        <th>Acquisition Time (YYYYMMDD)</th>
                        <th>Acquisition Time (Unix)</th>
                        <th>Acquisition Time (YYYY-MM-DD HH:MM:ssZ)</th>
                        <th>Unix Time</th>
                        <th>Time to Live</th>
                        <th>Latitude (float)</th>
                        <th>Longitude (float)</th>
                        <th>Ignition (bool)</th>
                        <th>Speed (float)</th>
                        <th>Distance (m) (float)</th>
                        <th>Hourmeter (sec) (int)</th>
                        <th>Direction (Azimuth) (float)</th>
                        <th>GPS Fix (bool)</th>
                        <th>Origin (enum)</th>
                        <th>History (bool)</th>
                        <th>Power Voltage (external)</th>
                        <th>Backup Battery Voltage</th>
                        <th>Satelite Count</th>
                        <th>GSM signal</th>
                        <th>Battery Level</th>
                        <th>Cell basic</th>
                        <th>Location Code</th>
                        <th>Software Version</th>
                        <th>Mode</th>
                        <th>Model</th>
                        <th>Message Number</th>
                        <th>Input</th>
                        <th>Input</th>
                        <th>Input</th>
                        <th>Output</th>
                        <th>Output</th>
                        <th>Altitude</th>
                        <th>Oil level</th>
                        <th>Vibration Level</th>
                        <th>iButton</th>
                        <th>Mobile Country Code</th>
                        <th>Mobile Network Code</th>
                        <th>Location Area Code</th>
                        <th>Cell Tower ID</th>
                        <th>Total Fuel</th>
                        <th>Current Fuel</th>
                        <th>Current Trip Mileage</th>
                        <th>RPM</th>
                        <th>Alarm Message</th>
                        <th>Alarm Tag</th>
                        <th>Alarm Value</th>
                        <th>Alarm Time</th>
                    </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    )

}
