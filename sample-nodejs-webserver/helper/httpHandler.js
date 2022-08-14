const httpHandler = (request, response) => { // avoid to use class in javascript

    const handlingResponse = (statusCode, message, data) => {
        response.statusCode = statusCode;

        let parseData = data === null || data === undefined ? {
            message: message,
        } : {
            message: message,
            data: data
        };

        response.end(
            JSON.stringify(parseData) // stringify json, needed to change object to string
        );
    };

    const parsingBodyJSON = (body) => {
        const {id, name, mail} = JSON.parse(body); // parsing body from json

        handlingResponse(200, 'success', {
            id: id,
            name: name,
            mail: mail,
            body: body,
            message: `Hello ${name ?? 'name is not set'} with ID: ${id ?? 'id is not set'} and email: ${mail ?? 'mail is not set'}`
        });
    };

    const dataStream = () => {
        /*
        *
        * stream logic to get body request
        * */

        let body = [];

        request.on('data', (chunk) => { // doing streaming, this will send post data into server
            body.push(chunk);
        })

        request.on('end', () => { // after streaming, this will process post data in server
            body = Buffer.concat(body).toString();
            try {
                body ? parsingBodyJSON(body) : handlingResponse(200, 'success', 'Empty Body');
            } catch (SyntaxError) {
                handlingResponse(422, 'fail', 'Invalid JSON')
            }
        })
    }

    return {
        setResponse: (statusCode, message, data) => {
            handlingResponse(statusCode, message, data)
        },

        parseBody: (body) => {
            parsingBodyJSON(body)
        },

        streamData: () => {
            dataStream()
        },
    }

}

module.exports = httpHandler;