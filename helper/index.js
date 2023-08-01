
export const response = (res, data, status) => {
    const responseObj = {
        data: data,
        status: status
    }
    res.format({
        json: () => {
            res.send(responseObj)}
    })
}
