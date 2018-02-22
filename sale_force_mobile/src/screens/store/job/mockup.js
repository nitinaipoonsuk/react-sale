
const createJobModel = (id,jobName, jobCode, sourceDate, sourceStationName, destDate, destStationName, customerName, license) => {
    return {
        Id: id,
        JobName:jobName,
        JobCode: jobCode,
        SourceDate: sourceDate,
        SourceStationName: sourceStationName,
        DestDate: destDate,
        DestStationName: destStationName,
        CustomerName: customerName,
        License: license
    }
}

const createJob = () => {
    let datas = []
    for (let i = 1; i < 20; i++) {
        let data = createJobModel(
            i,
            'JOB'+i,
            20180200001 + (i * 1000),
            new Date(2018, 2, i, 6 + i, (i * 10),0,0),
            'station' + i,
            new Date(2018, 2, i, 12 + i, (i * 20),0,0),
            'station' + (i * 10),
            'cust' + i,
            'คน-5678'
        )
        datas.push(data)
    }

    return datas
}

export default createJob()