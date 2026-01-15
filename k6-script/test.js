import http from 'k6/http';
import { check } from 'k6';

const endpoints = [
    '/struts2/',
    '/struts2/index',
    '/struts2/hello'
];

function randomEndpoint() {
    return endpoints[Math.floor(Math.random() * endpoints.length)];
}

export let options = {
    scenarios: {
        high_tps: {
            executor: 'constant-arrival-rate',
            rate: 1000,           // TPS desejado
            timeUnit: '1s',
            duration: '60m',
            preAllocatedVUs: 500, // VUs iniciais
            maxVUs: 1500,         // limite máximo de VUs
        },
    },
    thresholds: {
        'http_req_duration': ['p(95)<200'],
        'http_req_failed': ['rate<0.01'],
    },
};

export default function () {
    let url = `http://localhost:80${randomEndpoint()}`;
    let res = http.get(url);
    check(res, { 'status 200': (r) => r.status === 200 });
}

