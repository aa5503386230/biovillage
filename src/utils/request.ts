export function platformURL() {
    const env = import.meta.env.MODE;
    switch (env) {
        case 'dev': return 'https://chenkai-data.centmap.com:12081';
        case 'test': return 'https://tst-data.centmap.com:8443';
        default: return 'https://data.centmap.com';
    }
}

// 在这封装fetch