// path module load
const path = require('path');

// html plugin load
const HtmlWebpackPlugin = require('html-webpack-plugin');

// external css load
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // 개발, 프로덕션용인지 체크
    mode: "development",
    // 배포 전 개발용 자바스크립트 시작점
    entry : './src/index.js', 

    // 여러개의 모듈을 하나로 만들어, 저장시킬 위치를 설정
    output : { 
        filename : 'main.js',
        path : path.resolve(__dirname, 'dist')
    },

    // index.html을 기본 템플릿으로 반영할 수 있도록 설정
    plugins : [
        new HtmlWebpackPlugin({
            template : "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename : "common.css"
        })
    ],

    module : {
        rules : [

            // css-loader 셋팅
            {
                test : /\.css$/,
                use : [MiniCssExtractPlugin.loader, "css-loader"]
            },

            // file-loader 셋팅
            {
                test : /\.(png|jpe?g|gif|svg|webp)$/i,
                use : ['file-loader']
            }
        ]
    },

    // 개발 서버가 dist 폴더를 제공할 수 있도록 설정
    devServer : {
        static : {
            directory : path.resolve(__dirname, 'dist')
        },
        port : 8080
    }
}