function afterEachSyncSuccess(arg1, arg2, arg3) {
    var keys = Object.keys(this);
    if (keys.length !== 5)
        throw new Error("after each context doesn't have expected keys");

    var body = JSON.parse(this.response.body);
    if (body.param1 !== 'value2')
        throw new Error('unexpected response');

    if (arg1 !== 'foo') {
        throw new Error('Unexpected argument 1');
    }
    if (arg2 !== 'bar') {
        throw new Error('Unexpected argument 2');
    }
    if (!Array.isArray(arg3) || 3 !== arg3.length) {
        throw new Error('Unexpected argument 3');
    }
}

async function afterEachAsyncSuccess() {
    var keys = Object.keys(this);
    if (keys.length !== 5)
        throw new Error("after each context doesn't have expected keys");

    var body = JSON.parse(this.response.body);
    if (body.param1 !== 'value2')
        throw new Error('unexpected response');
}

function afterEachSyncError() {
    var keys = Object.keys(this);
    if (keys.length !== 5)
        throw new Error("after each context doesn't have expected keys");

    var body = JSON.parse(this.response.body);
    if (body.param1 !== 'value2')
        throw new Error('unexpected response');
    throw new Error('error thrown in after each hook');
}

async function afterEachAsyncError() {
    var keys = Object.keys(this);
    if (keys.length !== 5)
        throw new Error("after each context doesn't have expected keys");

    var body = JSON.parse(this.response.body);
    if (body.param1 !== 'value2')
        throw new Error('unexpected response');
    throw new Error('error thrown in after each hook');
}

module.exports = {
    afterEachSyncSuccess: afterEachSyncSuccess,
    afterEachAsyncSuccess: afterEachAsyncSuccess,
    afterEachSyncError: afterEachSyncError,
    afterEachAsyncError: afterEachAsyncError
};
