export const useParams = () => {
    const pathname = window.location.pathname
    const params = pathname.split('/').filter((param) => param !== '')
    return params;
}

export const pushRoute = (route: string) => {
    const pathname = window.location.pathname;
    const segments = pathname.split('/');

    if (segments.length > 3) {
        segments[segments.length - 1] = route;
    } else {
        segments.push(route);
    }

    const updatedUrl = `${window.location.origin}${segments.join('/')}`;

    window.location.href = updatedUrl;
}

export const navigate = (path: string) => {
    const origin = window.location.origin;
    const newUrl = `${origin}${path.startsWith('/') ? '' : '/'}${path}`;
    window.location.href = newUrl;
}

export const getIdFromYouTubeUrl = (url: string): string => {
    try {
        const parsedUrl = new URL(url);
        let id = '';

        if (parsedUrl.hostname.includes('youtube.com')) {
            id = parsedUrl.searchParams.get('v') || '';
        } else if (parsedUrl.hostname === 'youtu.be') {
            id = parsedUrl.pathname.slice(1);
        }

        return id;
    } catch (error) {
        return '';
    }
}