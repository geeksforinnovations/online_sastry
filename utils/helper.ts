export function calculateCost(storage) {
    const rate = storage <= 10
      ? 4
      : storage <= 100
        ? 2
        : 1;
  
    return rate * storage * 100;
  }

  export function success(body) {
    return buildResponse(200, body);
  }
  
  export function failure(body) {
    return buildResponse(500, body);
  }
  
  function buildResponse(statusCode, body) {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(body)
    };
  }