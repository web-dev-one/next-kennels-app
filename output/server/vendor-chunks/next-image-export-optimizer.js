"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-image-export-optimizer";
exports.ids = ["vendor-chunks/next-image-export-optimizer"];
exports.modules = {

/***/ "./node_modules/next-image-export-optimizer/dist/ExportedImage.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-image-export-optimizer/dist/ExportedImage.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\"use client\";\n\n\nconst splitFilePath = ({ filePath }) => {\n    const filenameWithExtension = filePath.split(\"\\\\\").pop()?.split(\"/\").pop() || \"\";\n    const filePathWithoutFilename = filePath.split(filenameWithExtension).shift();\n    const fileExtension = filePath.split(\".\").pop();\n    const filenameWithoutExtension = filenameWithExtension.substring(0, filenameWithExtension.lastIndexOf(\".\")) || filenameWithExtension;\n    return {\n        path: filePathWithoutFilename,\n        filename: filenameWithoutExtension,\n        extension: fileExtension || \"\",\n    };\n};\nconst generateImageURL = (src, width, basePath, isRemoteImage = false) => {\n    const { filename, path, extension } = splitFilePath({ filePath: src });\n    const useWebp = process.env.nextImageExportOptimizer_storePicturesInWEBP != undefined\n        ? process.env.nextImageExportOptimizer_storePicturesInWEBP == \"true\"\n        : true;\n    if (![\"JPG\", \"JPEG\", \"WEBP\", \"PNG\", \"AVIF\", \"GIF\"].includes(extension.toUpperCase())) {\n        // The images has an unsupported extension\n        // We will return the src\n        return src;\n    }\n    // If the images are stored as WEBP by the package, then we should change\n    // the extension to WEBP to load them correctly\n    let processedExtension = extension;\n    if (useWebp &&\n        [\"JPG\", \"JPEG\", \"PNG\", \"GIF\"].includes(extension.toUpperCase())) {\n        processedExtension = \"WEBP\";\n    }\n    let correctedPath = path;\n    const lastChar = correctedPath?.substr(-1); // Selects the last character\n    if (lastChar != \"/\") {\n        // If the last character is not a slash\n        correctedPath = correctedPath + \"/\"; // Append a slash to it.\n    }\n    const isStaticImage = src.includes(\"_next/static/media\");\n    if (basePath) {\n        if (basePath.endsWith(\"/\") &&\n            correctedPath &&\n            correctedPath.startsWith(\"/\")) {\n            correctedPath = basePath + correctedPath.slice(1);\n        }\n        else if (!basePath.endsWith(\"/\") &&\n            correctedPath &&\n            !correctedPath.startsWith(\"/\")) {\n            correctedPath = basePath + \"/\" + correctedPath;\n        }\n        else {\n            correctedPath = basePath + correctedPath;\n        }\n    }\n    const exportFolderName = process.env.nextImageExportOptimizer_exportFolderName ||\n        \"nextImageExportOptimizer\";\n    const basePathPrefixForStaticImages = basePath ? basePath + \"/\" : \"\";\n    let generatedImageURL = `${isStaticImage ? basePathPrefixForStaticImages : correctedPath}${exportFolderName}/${filename}-opt-${width}.${processedExtension.toUpperCase()}`;\n    // if the generatedImageURL is not starting with a slash, then we add one as long as it is not a remote image\n    if (!isRemoteImage && generatedImageURL.charAt(0) !== \"/\") {\n        generatedImageURL = \"/\" + generatedImageURL;\n    }\n    return generatedImageURL;\n};\nfunction urlToFilename(url) {\n    // Remove the protocol from the URL\n    let filename = url.replace(/^(https?|ftp):\\/\\//, \"\");\n    // Replace special characters with underscores\n    filename = filename.replace(/[/\\\\:*?\"<>|#%]/g, \"_\");\n    // Remove control characters\n    // eslint-disable-next-line no-control-regex\n    filename = filename.replace(/[\\x00-\\x1F\\x7F]/g, \"\");\n    // Trim any leading or trailing spaces\n    filename = filename.trim();\n    return filename;\n}\nconst imageURLForRemoteImage = ({ src, width, basePath, }) => {\n    const encodedSrc = urlToFilename(src);\n    return generateImageURL(encodedSrc, width, basePath, true);\n};\nconst optimizedLoader = ({ src, width, basePath, }) => {\n    const isStaticImage = typeof src === \"object\";\n    const _src = isStaticImage ? src.src : src;\n    const originalImageWidth = (isStaticImage && src.width) || undefined;\n    // if it is a static image, we can use the width of the original image to generate a reduced srcset that returns\n    // the same image url for widths that are larger than the original image\n    if (isStaticImage && originalImageWidth && width > originalImageWidth) {\n        const deviceSizes = {\"deviceSizes\":[640,750,828,1080,1200,1920,2048,3840],\"imageSizes\":[16,32,48,64,96,128,256,384],\"path\":\"/_next/image/\",\"loader\":\"default\",\"dangerouslyAllowSVG\":false,\"unoptimized\":true,\"domains\":[],\"remotePatterns\":[],\"output\":\"export\"}?.deviceSizes || [\n            640, 750, 828, 1080, 1200, 1920, 2048, 3840,\n        ];\n        const imageSizes = {\"deviceSizes\":[640,750,828,1080,1200,1920,2048,3840],\"imageSizes\":[16,32,48,64,96,128,256,384],\"path\":\"/_next/image/\",\"loader\":\"default\",\"dangerouslyAllowSVG\":false,\"unoptimized\":true,\"domains\":[],\"remotePatterns\":[],\"output\":\"export\"}?.imageSizes || [\n            16, 32, 48, 64, 96, 128, 256, 384,\n        ];\n        const allSizes = [...deviceSizes, ...imageSizes];\n        // only use the width if it is smaller or equal to the next size in the allSizes array\n        let nextLargestSize = null;\n        for (let i = 0; i < allSizes.length; i++) {\n            if (Number(allSizes[i]) >= originalImageWidth &&\n                (nextLargestSize === null || Number(allSizes[i]) < nextLargestSize)) {\n                nextLargestSize = Number(allSizes[i]);\n            }\n        }\n        if (nextLargestSize !== null) {\n            return generateImageURL(_src, nextLargestSize, basePath);\n        }\n    }\n    // Check if the image is a remote image (starts with http or https)\n    if (_src.startsWith(\"http\")) {\n        return imageURLForRemoteImage({ src: _src, width, basePath });\n    }\n    return generateImageURL(_src, width, basePath);\n};\nconst fallbackLoader = ({ src }) => {\n    let _src = typeof src === \"object\" ? src.src : src;\n    const isRemoteImage = _src.startsWith(\"http\");\n    // if the _src does not start with a slash, then we add one as long as it is not a remote image\n    if (!isRemoteImage && _src.charAt(0) !== \"/\") {\n        _src = \"/\" + _src;\n    }\n    return _src;\n};\nconst ExportedImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ src, priority = false, loading, className, width, height, onLoad, unoptimized, placeholder = \"blur\", basePath = \"\", alt = \"\", blurDataURL, style, onError, ...rest }, ref) => {\n    const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const automaticallyCalculatedBlurDataURL = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {\n        if (blurDataURL) {\n            // use the user provided blurDataURL if present\n            return blurDataURL;\n        }\n        // check if the src is specified as a local file -> then it is an object\n        const isStaticImage = typeof src === \"object\";\n        let _src = isStaticImage ? src.src : src;\n        if (unoptimized === true) {\n            // return the src image when unoptimized\n            return _src;\n        }\n        // Check if the image is a remote image (starts with http or https)\n        if (_src.startsWith(\"http\")) {\n            return imageURLForRemoteImage({ src: _src, width: 10, basePath });\n        }\n        // otherwise use the generated image of 10px width as a blurDataURL\n        return generateImageURL(_src, 10, basePath);\n    }, [blurDataURL, src, unoptimized, basePath]);\n    // check if the src is a SVG image -> then we should not use the blurDataURL and use unoptimized\n    const isSVG = typeof src === \"object\" ? src.src.endsWith(\".svg\") : src.endsWith(\".svg\");\n    const [blurComplete, setBlurComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Currently, we have to handle the blurDataURL ourselves as the new Image component\n    // is expecting a base64 encoded string, but the generated blurDataURL is a normal URL\n    const blurStyle = placeholder === \"blur\" &&\n        !isSVG &&\n        automaticallyCalculatedBlurDataURL &&\n        automaticallyCalculatedBlurDataURL.startsWith(\"/\") &&\n        !blurComplete\n        ? {\n            backgroundSize: style?.objectFit || \"cover\",\n            backgroundPosition: style?.objectPosition || \"50% 50%\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundImage: `url(\"${automaticallyCalculatedBlurDataURL}\")`,\n        }\n        : undefined;\n    const isStaticImage = typeof src === \"object\";\n    let _src = isStaticImage ? src.src : src;\n    if (basePath && !isStaticImage && _src.startsWith(\"/\")) {\n        _src = basePath + _src;\n    }\n    if (basePath && !isStaticImage && !_src.startsWith(\"/\")) {\n        _src = basePath + \"/\" + _src;\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_0___default()), { ref: ref, alt: alt, ...rest, ...(width && { width }), ...(height && { height }), ...(loading && { loading }), ...(className && { className }), ...(onLoad && { onLoad }), ...(placeholder && {\n            placeholder: blurStyle || blurComplete ? \"empty\" : placeholder,\n        }), ...(unoptimized && { unoptimized }), ...(priority && { priority }), ...(isSVG && { unoptimized: true }), style: { ...style, ...blurStyle }, loader: imageError || unoptimized === true\n            ? fallbackLoader\n            : (e) => optimizedLoader({ src, width: e.width, basePath }), blurDataURL: automaticallyCalculatedBlurDataURL, onError: (error) => {\n            setImageError(true);\n            setBlurComplete(true);\n            // execute the onError function if provided\n            onError && onError(error);\n        }, onLoad: (e) => {\n            // for some configurations, the onError handler is not called on an error occurrence\n            // so we need to check if the image is loaded correctly\n            const target = e.target;\n            if (target.naturalWidth === 0) {\n                // Broken image, fall back to unoptimized (meaning the original image src)\n                setImageError(true);\n            }\n            setBlurComplete(true);\n            // execute the onLoad callback if present\n            onLoad && onLoad(e);\n        }, src: isStaticImage ? src : _src }));\n});\nExportedImage.displayName = \"ExportedImage\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportedImage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC1pbWFnZS1leHBvcnQtb3B0aW1pemVyL2Rpc3QvRXhwb3J0ZWRJbWFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQytCO0FBQzhCO0FBQzdELHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRCQUE0QixrQkFBa0IsZUFBZTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOERBQThELEVBQUUsaUJBQWlCLEdBQUcsU0FBUyxPQUFPLE1BQU0sR0FBRyxpQ0FBaUM7QUFDN0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVCQUF1QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0T0FBNkI7QUFDekQ7QUFDQTtBQUNBLDJCQUEyQiw0T0FBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBVSxJQUFJLG9LQUFvSztBQUN4TSx3Q0FBd0MsK0NBQVE7QUFDaEQsK0NBQStDLDhDQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdDQUFnQztBQUM1RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRDQUE0QywrQ0FBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1DQUFtQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQW1CLENBQUMsbURBQUssSUFBSSw0Q0FBNEMsT0FBTyxtQkFBbUIsUUFBUSxvQkFBb0IsU0FBUyxzQkFBc0IsV0FBVyxtQkFBbUIsUUFBUTtBQUNoTjtBQUNBLFNBQVMsd0JBQXdCLGFBQWEscUJBQXFCLFVBQVUsa0JBQWtCLG1CQUFtQixZQUFZLHdCQUF3QjtBQUN0SjtBQUNBLHVDQUF1QywrQkFBK0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL25leHQtaW1hZ2UtZXhwb3J0LW9wdGltaXplci9kaXN0L0V4cG9ydGVkSW1hZ2UuanM/ZWYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBzcGxpdEZpbGVQYXRoID0gKHsgZmlsZVBhdGggfSkgPT4ge1xuICAgIGNvbnN0IGZpbGVuYW1lV2l0aEV4dGVuc2lvbiA9IGZpbGVQYXRoLnNwbGl0KFwiXFxcXFwiKS5wb3AoKT8uc3BsaXQoXCIvXCIpLnBvcCgpIHx8IFwiXCI7XG4gICAgY29uc3QgZmlsZVBhdGhXaXRob3V0RmlsZW5hbWUgPSBmaWxlUGF0aC5zcGxpdChmaWxlbmFtZVdpdGhFeHRlbnNpb24pLnNoaWZ0KCk7XG4gICAgY29uc3QgZmlsZUV4dGVuc2lvbiA9IGZpbGVQYXRoLnNwbGl0KFwiLlwiKS5wb3AoKTtcbiAgICBjb25zdCBmaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24gPSBmaWxlbmFtZVdpdGhFeHRlbnNpb24uc3Vic3RyaW5nKDAsIGZpbGVuYW1lV2l0aEV4dGVuc2lvbi5sYXN0SW5kZXhPZihcIi5cIikpIHx8IGZpbGVuYW1lV2l0aEV4dGVuc2lvbjtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoOiBmaWxlUGF0aFdpdGhvdXRGaWxlbmFtZSxcbiAgICAgICAgZmlsZW5hbWU6IGZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbixcbiAgICAgICAgZXh0ZW5zaW9uOiBmaWxlRXh0ZW5zaW9uIHx8IFwiXCIsXG4gICAgfTtcbn07XG5jb25zdCBnZW5lcmF0ZUltYWdlVVJMID0gKHNyYywgd2lkdGgsIGJhc2VQYXRoLCBpc1JlbW90ZUltYWdlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7IGZpbGVuYW1lLCBwYXRoLCBleHRlbnNpb24gfSA9IHNwbGl0RmlsZVBhdGgoeyBmaWxlUGF0aDogc3JjIH0pO1xuICAgIGNvbnN0IHVzZVdlYnAgPSBwcm9jZXNzLmVudi5uZXh0SW1hZ2VFeHBvcnRPcHRpbWl6ZXJfc3RvcmVQaWN0dXJlc0luV0VCUCAhPSB1bmRlZmluZWRcbiAgICAgICAgPyBwcm9jZXNzLmVudi5uZXh0SW1hZ2VFeHBvcnRPcHRpbWl6ZXJfc3RvcmVQaWN0dXJlc0luV0VCUCA9PSBcInRydWVcIlxuICAgICAgICA6IHRydWU7XG4gICAgaWYgKCFbXCJKUEdcIiwgXCJKUEVHXCIsIFwiV0VCUFwiLCBcIlBOR1wiLCBcIkFWSUZcIiwgXCJHSUZcIl0uaW5jbHVkZXMoZXh0ZW5zaW9uLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgIC8vIFRoZSBpbWFnZXMgaGFzIGFuIHVuc3VwcG9ydGVkIGV4dGVuc2lvblxuICAgICAgICAvLyBXZSB3aWxsIHJldHVybiB0aGUgc3JjXG4gICAgICAgIHJldHVybiBzcmM7XG4gICAgfVxuICAgIC8vIElmIHRoZSBpbWFnZXMgYXJlIHN0b3JlZCBhcyBXRUJQIGJ5IHRoZSBwYWNrYWdlLCB0aGVuIHdlIHNob3VsZCBjaGFuZ2VcbiAgICAvLyB0aGUgZXh0ZW5zaW9uIHRvIFdFQlAgdG8gbG9hZCB0aGVtIGNvcnJlY3RseVxuICAgIGxldCBwcm9jZXNzZWRFeHRlbnNpb24gPSBleHRlbnNpb247XG4gICAgaWYgKHVzZVdlYnAgJiZcbiAgICAgICAgW1wiSlBHXCIsIFwiSlBFR1wiLCBcIlBOR1wiLCBcIkdJRlwiXS5pbmNsdWRlcyhleHRlbnNpb24udG9VcHBlckNhc2UoKSkpIHtcbiAgICAgICAgcHJvY2Vzc2VkRXh0ZW5zaW9uID0gXCJXRUJQXCI7XG4gICAgfVxuICAgIGxldCBjb3JyZWN0ZWRQYXRoID0gcGF0aDtcbiAgICBjb25zdCBsYXN0Q2hhciA9IGNvcnJlY3RlZFBhdGg/LnN1YnN0cigtMSk7IC8vIFNlbGVjdHMgdGhlIGxhc3QgY2hhcmFjdGVyXG4gICAgaWYgKGxhc3RDaGFyICE9IFwiL1wiKSB7XG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGNoYXJhY3RlciBpcyBub3QgYSBzbGFzaFxuICAgICAgICBjb3JyZWN0ZWRQYXRoID0gY29ycmVjdGVkUGF0aCArIFwiL1wiOyAvLyBBcHBlbmQgYSBzbGFzaCB0byBpdC5cbiAgICB9XG4gICAgY29uc3QgaXNTdGF0aWNJbWFnZSA9IHNyYy5pbmNsdWRlcyhcIl9uZXh0L3N0YXRpYy9tZWRpYVwiKTtcbiAgICBpZiAoYmFzZVBhdGgpIHtcbiAgICAgICAgaWYgKGJhc2VQYXRoLmVuZHNXaXRoKFwiL1wiKSAmJlxuICAgICAgICAgICAgY29ycmVjdGVkUGF0aCAmJlxuICAgICAgICAgICAgY29ycmVjdGVkUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgY29ycmVjdGVkUGF0aCA9IGJhc2VQYXRoICsgY29ycmVjdGVkUGF0aC5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghYmFzZVBhdGguZW5kc1dpdGgoXCIvXCIpICYmXG4gICAgICAgICAgICBjb3JyZWN0ZWRQYXRoICYmXG4gICAgICAgICAgICAhY29ycmVjdGVkUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgY29ycmVjdGVkUGF0aCA9IGJhc2VQYXRoICsgXCIvXCIgKyBjb3JyZWN0ZWRQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ycmVjdGVkUGF0aCA9IGJhc2VQYXRoICsgY29ycmVjdGVkUGF0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBleHBvcnRGb2xkZXJOYW1lID0gcHJvY2Vzcy5lbnYubmV4dEltYWdlRXhwb3J0T3B0aW1pemVyX2V4cG9ydEZvbGRlck5hbWUgfHxcbiAgICAgICAgXCJuZXh0SW1hZ2VFeHBvcnRPcHRpbWl6ZXJcIjtcbiAgICBjb25zdCBiYXNlUGF0aFByZWZpeEZvclN0YXRpY0ltYWdlcyA9IGJhc2VQYXRoID8gYmFzZVBhdGggKyBcIi9cIiA6IFwiXCI7XG4gICAgbGV0IGdlbmVyYXRlZEltYWdlVVJMID0gYCR7aXNTdGF0aWNJbWFnZSA/IGJhc2VQYXRoUHJlZml4Rm9yU3RhdGljSW1hZ2VzIDogY29ycmVjdGVkUGF0aH0ke2V4cG9ydEZvbGRlck5hbWV9LyR7ZmlsZW5hbWV9LW9wdC0ke3dpZHRofS4ke3Byb2Nlc3NlZEV4dGVuc2lvbi50b1VwcGVyQ2FzZSgpfWA7XG4gICAgLy8gaWYgdGhlIGdlbmVyYXRlZEltYWdlVVJMIGlzIG5vdCBzdGFydGluZyB3aXRoIGEgc2xhc2gsIHRoZW4gd2UgYWRkIG9uZSBhcyBsb25nIGFzIGl0IGlzIG5vdCBhIHJlbW90ZSBpbWFnZVxuICAgIGlmICghaXNSZW1vdGVJbWFnZSAmJiBnZW5lcmF0ZWRJbWFnZVVSTC5jaGFyQXQoMCkgIT09IFwiL1wiKSB7XG4gICAgICAgIGdlbmVyYXRlZEltYWdlVVJMID0gXCIvXCIgKyBnZW5lcmF0ZWRJbWFnZVVSTDtcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlZEltYWdlVVJMO1xufTtcbmZ1bmN0aW9uIHVybFRvRmlsZW5hbWUodXJsKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBwcm90b2NvbCBmcm9tIHRoZSBVUkxcbiAgICBsZXQgZmlsZW5hbWUgPSB1cmwucmVwbGFjZSgvXihodHRwcz98ZnRwKTpcXC9cXC8vLCBcIlwiKTtcbiAgICAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVycyB3aXRoIHVuZGVyc2NvcmVzXG4gICAgZmlsZW5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC9bL1xcXFw6Kj9cIjw+fCMlXS9nLCBcIl9cIik7XG4gICAgLy8gUmVtb3ZlIGNvbnRyb2wgY2hhcmFjdGVyc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICAgZmlsZW5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC9bXFx4MDAtXFx4MUZcXHg3Rl0vZywgXCJcIik7XG4gICAgLy8gVHJpbSBhbnkgbGVhZGluZyBvciB0cmFpbGluZyBzcGFjZXNcbiAgICBmaWxlbmFtZSA9IGZpbGVuYW1lLnRyaW0oKTtcbiAgICByZXR1cm4gZmlsZW5hbWU7XG59XG5jb25zdCBpbWFnZVVSTEZvclJlbW90ZUltYWdlID0gKHsgc3JjLCB3aWR0aCwgYmFzZVBhdGgsIH0pID0+IHtcbiAgICBjb25zdCBlbmNvZGVkU3JjID0gdXJsVG9GaWxlbmFtZShzcmMpO1xuICAgIHJldHVybiBnZW5lcmF0ZUltYWdlVVJMKGVuY29kZWRTcmMsIHdpZHRoLCBiYXNlUGF0aCwgdHJ1ZSk7XG59O1xuY29uc3Qgb3B0aW1pemVkTG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgYmFzZVBhdGgsIH0pID0+IHtcbiAgICBjb25zdCBpc1N0YXRpY0ltYWdlID0gdHlwZW9mIHNyYyA9PT0gXCJvYmplY3RcIjtcbiAgICBjb25zdCBfc3JjID0gaXNTdGF0aWNJbWFnZSA/IHNyYy5zcmMgOiBzcmM7XG4gICAgY29uc3Qgb3JpZ2luYWxJbWFnZVdpZHRoID0gKGlzU3RhdGljSW1hZ2UgJiYgc3JjLndpZHRoKSB8fCB1bmRlZmluZWQ7XG4gICAgLy8gaWYgaXQgaXMgYSBzdGF0aWMgaW1hZ2UsIHdlIGNhbiB1c2UgdGhlIHdpZHRoIG9mIHRoZSBvcmlnaW5hbCBpbWFnZSB0byBnZW5lcmF0ZSBhIHJlZHVjZWQgc3Jjc2V0IHRoYXQgcmV0dXJuc1xuICAgIC8vIHRoZSBzYW1lIGltYWdlIHVybCBmb3Igd2lkdGhzIHRoYXQgYXJlIGxhcmdlciB0aGFuIHRoZSBvcmlnaW5hbCBpbWFnZVxuICAgIGlmIChpc1N0YXRpY0ltYWdlICYmIG9yaWdpbmFsSW1hZ2VXaWR0aCAmJiB3aWR0aCA+IG9yaWdpbmFsSW1hZ2VXaWR0aCkge1xuICAgICAgICBjb25zdCBkZXZpY2VTaXplcyA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTPy5kZXZpY2VTaXplcyB8fCBbXG4gICAgICAgICAgICA2NDAsIDc1MCwgODI4LCAxMDgwLCAxMjAwLCAxOTIwLCAyMDQ4LCAzODQwLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBpbWFnZVNpemVzID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFM/LmltYWdlU2l6ZXMgfHwgW1xuICAgICAgICAgICAgMTYsIDMyLCA0OCwgNjQsIDk2LCAxMjgsIDI1NiwgMzg0LFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBhbGxTaXplcyA9IFsuLi5kZXZpY2VTaXplcywgLi4uaW1hZ2VTaXplc107XG4gICAgICAgIC8vIG9ubHkgdXNlIHRoZSB3aWR0aCBpZiBpdCBpcyBzbWFsbGVyIG9yIGVxdWFsIHRvIHRoZSBuZXh0IHNpemUgaW4gdGhlIGFsbFNpemVzIGFycmF5XG4gICAgICAgIGxldCBuZXh0TGFyZ2VzdFNpemUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNpemVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGFsbFNpemVzW2ldKSA+PSBvcmlnaW5hbEltYWdlV2lkdGggJiZcbiAgICAgICAgICAgICAgICAobmV4dExhcmdlc3RTaXplID09PSBudWxsIHx8IE51bWJlcihhbGxTaXplc1tpXSkgPCBuZXh0TGFyZ2VzdFNpemUpKSB7XG4gICAgICAgICAgICAgICAgbmV4dExhcmdlc3RTaXplID0gTnVtYmVyKGFsbFNpemVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dExhcmdlc3RTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVJbWFnZVVSTChfc3JjLCBuZXh0TGFyZ2VzdFNpemUsIGJhc2VQYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDaGVjayBpZiB0aGUgaW1hZ2UgaXMgYSByZW1vdGUgaW1hZ2UgKHN0YXJ0cyB3aXRoIGh0dHAgb3IgaHR0cHMpXG4gICAgaWYgKF9zcmMuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlVVJMRm9yUmVtb3RlSW1hZ2UoeyBzcmM6IF9zcmMsIHdpZHRoLCBiYXNlUGF0aCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlSW1hZ2VVUkwoX3NyYywgd2lkdGgsIGJhc2VQYXRoKTtcbn07XG5jb25zdCBmYWxsYmFja0xvYWRlciA9ICh7IHNyYyB9KSA9PiB7XG4gICAgbGV0IF9zcmMgPSB0eXBlb2Ygc3JjID09PSBcIm9iamVjdFwiID8gc3JjLnNyYyA6IHNyYztcbiAgICBjb25zdCBpc1JlbW90ZUltYWdlID0gX3NyYy5zdGFydHNXaXRoKFwiaHR0cFwiKTtcbiAgICAvLyBpZiB0aGUgX3NyYyBkb2VzIG5vdCBzdGFydCB3aXRoIGEgc2xhc2gsIHRoZW4gd2UgYWRkIG9uZSBhcyBsb25nIGFzIGl0IGlzIG5vdCBhIHJlbW90ZSBpbWFnZVxuICAgIGlmICghaXNSZW1vdGVJbWFnZSAmJiBfc3JjLmNoYXJBdCgwKSAhPT0gXCIvXCIpIHtcbiAgICAgICAgX3NyYyA9IFwiL1wiICsgX3NyYztcbiAgICB9XG4gICAgcmV0dXJuIF9zcmM7XG59O1xuY29uc3QgRXhwb3J0ZWRJbWFnZSA9IGZvcndhcmRSZWYoKHsgc3JjLCBwcmlvcml0eSA9IGZhbHNlLCBsb2FkaW5nLCBjbGFzc05hbWUsIHdpZHRoLCBoZWlnaHQsIG9uTG9hZCwgdW5vcHRpbWl6ZWQsIHBsYWNlaG9sZGVyID0gXCJibHVyXCIsIGJhc2VQYXRoID0gXCJcIiwgYWx0ID0gXCJcIiwgYmx1ckRhdGFVUkwsIHN0eWxlLCBvbkVycm9yLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtpbWFnZUVycm9yLCBzZXRJbWFnZUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhdXRvbWF0aWNhbGx5Q2FsY3VsYXRlZEJsdXJEYXRhVVJMID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgLy8gdXNlIHRoZSB1c2VyIHByb3ZpZGVkIGJsdXJEYXRhVVJMIGlmIHByZXNlbnRcbiAgICAgICAgICAgIHJldHVybiBibHVyRGF0YVVSTDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgc3JjIGlzIHNwZWNpZmllZCBhcyBhIGxvY2FsIGZpbGUgLT4gdGhlbiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgY29uc3QgaXNTdGF0aWNJbWFnZSA9IHR5cGVvZiBzcmMgPT09IFwib2JqZWN0XCI7XG4gICAgICAgIGxldCBfc3JjID0gaXNTdGF0aWNJbWFnZSA/IHNyYy5zcmMgOiBzcmM7XG4gICAgICAgIGlmICh1bm9wdGltaXplZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBzcmMgaW1hZ2Ugd2hlbiB1bm9wdGltaXplZFxuICAgICAgICAgICAgcmV0dXJuIF9zcmM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGltYWdlIGlzIGEgcmVtb3RlIGltYWdlIChzdGFydHMgd2l0aCBodHRwIG9yIGh0dHBzKVxuICAgICAgICBpZiAoX3NyYy5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlVVJMRm9yUmVtb3RlSW1hZ2UoeyBzcmM6IF9zcmMsIHdpZHRoOiAxMCwgYmFzZVBhdGggfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlIHVzZSB0aGUgZ2VuZXJhdGVkIGltYWdlIG9mIDEwcHggd2lkdGggYXMgYSBibHVyRGF0YVVSTFxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVJbWFnZVVSTChfc3JjLCAxMCwgYmFzZVBhdGgpO1xuICAgIH0sIFtibHVyRGF0YVVSTCwgc3JjLCB1bm9wdGltaXplZCwgYmFzZVBhdGhdKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgc3JjIGlzIGEgU1ZHIGltYWdlIC0+IHRoZW4gd2Ugc2hvdWxkIG5vdCB1c2UgdGhlIGJsdXJEYXRhVVJMIGFuZCB1c2UgdW5vcHRpbWl6ZWRcbiAgICBjb25zdCBpc1NWRyA9IHR5cGVvZiBzcmMgPT09IFwib2JqZWN0XCIgPyBzcmMuc3JjLmVuZHNXaXRoKFwiLnN2Z1wiKSA6IHNyYy5lbmRzV2l0aChcIi5zdmdcIik7XG4gICAgY29uc3QgW2JsdXJDb21wbGV0ZSwgc2V0Qmx1ckNvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBDdXJyZW50bHksIHdlIGhhdmUgdG8gaGFuZGxlIHRoZSBibHVyRGF0YVVSTCBvdXJzZWx2ZXMgYXMgdGhlIG5ldyBJbWFnZSBjb21wb25lbnRcbiAgICAvLyBpcyBleHBlY3RpbmcgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcsIGJ1dCB0aGUgZ2VuZXJhdGVkIGJsdXJEYXRhVVJMIGlzIGEgbm9ybWFsIFVSTFxuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSBcImJsdXJcIiAmJlxuICAgICAgICAhaXNTVkcgJiZcbiAgICAgICAgYXV0b21hdGljYWxseUNhbGN1bGF0ZWRCbHVyRGF0YVVSTCAmJlxuICAgICAgICBhdXRvbWF0aWNhbGx5Q2FsY3VsYXRlZEJsdXJEYXRhVVJMLnN0YXJ0c1dpdGgoXCIvXCIpICYmXG4gICAgICAgICFibHVyQ29tcGxldGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogc3R5bGU/Lm9iamVjdEZpdCB8fCBcImNvdmVyXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHN0eWxlPy5vYmplY3RQb3NpdGlvbiB8fCBcIjUwJSA1MCVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2F1dG9tYXRpY2FsbHlDYWxjdWxhdGVkQmx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpc1N0YXRpY0ltYWdlID0gdHlwZW9mIHNyYyA9PT0gXCJvYmplY3RcIjtcbiAgICBsZXQgX3NyYyA9IGlzU3RhdGljSW1hZ2UgPyBzcmMuc3JjIDogc3JjO1xuICAgIGlmIChiYXNlUGF0aCAmJiAhaXNTdGF0aWNJbWFnZSAmJiBfc3JjLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgIF9zcmMgPSBiYXNlUGF0aCArIF9zcmM7XG4gICAgfVxuICAgIGlmIChiYXNlUGF0aCAmJiAhaXNTdGF0aWNJbWFnZSAmJiAhX3NyYy5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgICBfc3JjID0gYmFzZVBhdGggKyBcIi9cIiArIF9zcmM7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyByZWY6IHJlZiwgYWx0OiBhbHQsIC4uLnJlc3QsIC4uLih3aWR0aCAmJiB7IHdpZHRoIH0pLCAuLi4oaGVpZ2h0ICYmIHsgaGVpZ2h0IH0pLCAuLi4obG9hZGluZyAmJiB7IGxvYWRpbmcgfSksIC4uLihjbGFzc05hbWUgJiYgeyBjbGFzc05hbWUgfSksIC4uLihvbkxvYWQgJiYgeyBvbkxvYWQgfSksIC4uLihwbGFjZWhvbGRlciAmJiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogYmx1clN0eWxlIHx8IGJsdXJDb21wbGV0ZSA/IFwiZW1wdHlcIiA6IHBsYWNlaG9sZGVyLFxuICAgICAgICB9KSwgLi4uKHVub3B0aW1pemVkICYmIHsgdW5vcHRpbWl6ZWQgfSksIC4uLihwcmlvcml0eSAmJiB7IHByaW9yaXR5IH0pLCAuLi4oaXNTVkcgJiYgeyB1bm9wdGltaXplZDogdHJ1ZSB9KSwgc3R5bGU6IHsgLi4uc3R5bGUsIC4uLmJsdXJTdHlsZSB9LCBsb2FkZXI6IGltYWdlRXJyb3IgfHwgdW5vcHRpbWl6ZWQgPT09IHRydWVcbiAgICAgICAgICAgID8gZmFsbGJhY2tMb2FkZXJcbiAgICAgICAgICAgIDogKGUpID0+IG9wdGltaXplZExvYWRlcih7IHNyYywgd2lkdGg6IGUud2lkdGgsIGJhc2VQYXRoIH0pLCBibHVyRGF0YVVSTDogYXV0b21hdGljYWxseUNhbGN1bGF0ZWRCbHVyRGF0YVVSTCwgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBzZXRJbWFnZUVycm9yKHRydWUpO1xuICAgICAgICAgICAgc2V0Qmx1ckNvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25FcnJvciBmdW5jdGlvbiBpZiBwcm92aWRlZFxuICAgICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgfSwgb25Mb2FkOiAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gZm9yIHNvbWUgY29uZmlndXJhdGlvbnMsIHRoZSBvbkVycm9yIGhhbmRsZXIgaXMgbm90IGNhbGxlZCBvbiBhbiBlcnJvciBvY2N1cnJlbmNlXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBpbWFnZSBpcyBsb2FkZWQgY29ycmVjdGx5XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICh0YXJnZXQubmF0dXJhbFdpZHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQnJva2VuIGltYWdlLCBmYWxsIGJhY2sgdG8gdW5vcHRpbWl6ZWQgKG1lYW5pbmcgdGhlIG9yaWdpbmFsIGltYWdlIHNyYylcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUVycm9yKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Qmx1ckNvbXBsZXRlKHRydWUpO1xuICAgICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25Mb2FkIGNhbGxiYWNrIGlmIHByZXNlbnRcbiAgICAgICAgICAgIG9uTG9hZCAmJiBvbkxvYWQoZSk7XG4gICAgICAgIH0sIHNyYzogaXNTdGF0aWNJbWFnZSA/IHNyYyA6IF9zcmMgfSkpO1xufSk7XG5FeHBvcnRlZEltYWdlLmRpc3BsYXlOYW1lID0gXCJFeHBvcnRlZEltYWdlXCI7XG5leHBvcnQgZGVmYXVsdCBFeHBvcnRlZEltYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next-image-export-optimizer/dist/ExportedImage.js\n");

/***/ })

};
;