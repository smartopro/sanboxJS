/* --------------- modules & plugins --------------------------- */

const path = require("path");
const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

/* --------------- const ------------------------------------- */

let paths = {
    src: {
        abs: path.resolve(__dirname, "src"),
        rel: "src"
    },
    dist: {
        debug: {
            abs: path.resolve(__dirname, "dist/debug"),
            rel: "dist/debug"
        },
        release: {
            abs: path.resolve(__dirname, "dist/release"),
            rel: "dist/release"
        }
    },
    root: {
        debug: {
            abs: __dirname,
            rel: "/code/sandbox/js/",
            host: "https://localhost:4430"
        },
        release: {
            abs: __dirname,
            rel: "/"
        }
    },
    folders: {
        js: "js/",
        style: "style/",
        img: "img/"
    }
};

const isDev = process.env.NODE_ENV === "development";
const distPath = isDev ? paths.dist.debug.abs : paths.dist.release.abs;

/* --------------- functions --------------------------------- */

const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
    let loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
                publicPath: (resourcePath, context) => {
                    return path.relative(path.dirname(resourcePath), context) + '/';
                }
            }
        },
        "css-loader"
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
}

function generateHtmlPlugins(templateDirs) {
    let plugins = [];
    if (templateDirs === "" || templateDirs === []) return [];
    if (!Array.isArray(templateDirs)) templateDirs = [templateDirs];

    templateDirs.forEach(templateDir => {
        let templateFiles;
        try {
            templateFiles = fs.readdirSync(path.resolve(__dirname, "src", templateDir));
        } catch (e) {
            if (e.errno === -4058) return []; // directory not found
        }

        // filter needed extensions
        templateFiles = templateFiles.filter((item) => {
            const parts = item.split('.');
            const extension = parts[1];
            return ["php", "html", "htm"].includes(extension);
        });

        plugins = templateFiles.map(item => {
            const parts = item.split('.');
            const name = parts[0];
            const extension = parts[1];
            return new HTMLWebpackPlugin({
                filename: path.join(templateDir, `${name}.${extension}`),
                template: path.join(templateDir, `${name}.${extension}`),
                //chunks: [name],
                collapseWhiteSpace: !isDev, // minify HTML in production
                ignoreCustomComments: isDev ? [] : [/^!/]
            })
        }).concat(plugins);
    });
    return plugins;
}

const plugins = () => {
    let base = [
        new CopyWebpackPlugin([]),
        new MiniCssExtractPlugin({
            filename: paths.folders.style  + fileName("css"),
            path: distPath
        })
    ];

    base = base.concat(
        generateHtmlPlugins([""])
    );

    return base;
}

/* ---------------- module.exports ------------------------ */

module.exports = {
    context: paths.src.abs,
    externals: {
        paths: paths
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@js": path.resolve(__dirname, "src/js"),
            "@img": path.resolve(__dirname, "src/img"),
            "@style": path.resolve(__dirname, "src/style")
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    output: {
        filename: paths.folders.js + fileName("js")
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: cssLoaders()
            },
            {
                test: /\.(s[ac]ss)$/i,
                use: cssLoaders("sass-loader")
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }]
            },
            {
                test: /\.(html?|php)$/i,
                use: [{
                    loader: "html-loader",
                    options: {
                        attributes: {
                            root: ".",
                            list: [{
                                attribute: "src",
                                type: "src",
                            }, {
                                attribute: "data-src",
                                type: "src",
                            }, {
                                attribute: "srcset",
                                type: "srcset",
                            }, {
                                tag: "link",
                                attribute: "href",
                                type: "src",
                            }, {
                                attribute: 'data',
                                type: 'src',
                            }, {
                                attribute: 'poster',
                                type: 'src',
                            }],
                        }
                    }
                }]
            }
        ]
    }
};
