'use strict';

jest.mock('rn-fetch-blob', () => ({
    default: {
        fs: {}
    }
}));
jest.mock('react-native-clcasher/MemoryCache', () => ({
    default: {}
}));

import ImageCacheManager from '../ImageCacheManager';
import SimpleMemoryCache from './SimpleMemoryCache';
import SimpleMemoryFs from './SimpleMemoryFs';

const icm = ImageCacheManager({}, SimpleMemoryCache, SimpleMemoryFs);

describe('ImageCacheManager', () => {

    beforeEach(() => icm.clearCache());

    describe('downloadAndCacheUrl', () => {

        it('should fail if URL is not cacheable', () => {
            return icm.getCacheInfo()
                .then(res => console.log(res))
                .then(() => {
                    return expect(icm.downloadAndCacheUrl('not a real url')).rejects.toBeDefined();
                });
        });

        it('should download a file when not in cache', () => {
            return icm.getCacheInfo()
                .then(res => console.log(res))
                .then(() => icm.downloadAndCacheUrl('https://d1z5465ojv07ki.cloudfront.net/dev/a3dcb3f6a55148efaf45feae3/1G0KkwNHya/c5iGuMlFTO_w1125.webp'))
                .then(() => icm.getCacheInfo())
                .then(res => console.log(res))
        });

        it('should add new entry to the cache if not in cache', () => {

        });

        it('should return file name if image is in cache', () => {

        });

        it('should not return cached entry if expired', () => {

        });

    });

});