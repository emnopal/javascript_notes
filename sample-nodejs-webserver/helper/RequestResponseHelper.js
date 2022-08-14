class RequestResponseHelper {

    constructor(request, response) {
        this.request = request;
        this.response = response;
    }

    setHeader(name, value){
        this.response.setHeader(name, value);
    }

    setResponse(statusCode, message, data){
        this.response.statusCode = statusCode;

        let parseData = data === null || data === undefined ? {
            message: message,
        } : {
            message: message,
            data: data
        };

        this.response.end(
            JSON.stringify(parseData) // stringify json
        );
    }

    parseBody(body){
        const {id, name, mail} = JSON.parse(body); // parsing body from json
        this.setResponse(200, 'success', {
            id: id,
            name: name,
            mail: mail,
            body: body,
            message: `Hello ${name} with ID: ${id} and email: ${mail ?? 'Mail is not set'}`
        });
    }

    getRequest(){
        return this.request;
    }

    streamData(){
        // stream logic to get body request
        let body = [];

        // doing streaming, this will send post data into server
        this.request.on('data', (chunk) => {
            body.push(chunk);
        })

        // after streaming, this will process post data in server
        this.request.on('end', () => {
            body = Buffer.concat(body).toString();
            try {
                body ? this.parseBody(body) : this.setResponse(200, 'success', 'Empty Body');
            } catch (SyntaxError) {
                this.setResponse(422, 'fail', 'Invalid JSON')
            }
        })
    }

}

module.exports = RequestResponseHelper;