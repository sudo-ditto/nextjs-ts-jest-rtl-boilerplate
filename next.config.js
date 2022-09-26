module.exports = {
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module (e.g. emotion)
        config.resolve.fallback = { fs: false, path: false, module: false, os: false };

        return config;
    }
};
