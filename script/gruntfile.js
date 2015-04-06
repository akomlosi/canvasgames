module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			app: {
				files: {
					'libs/build/build.js': ['libs/app/**/*.js']
				}
			},
			test: {
				files: {
					'tests/bundle/bundle.js': ['tests/apptest/**/*.js', 'libs/app/**/*.js']
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['libs/app/**/*.js'],
				dest: 'libs/build/concatForTests.js'
			}
		},
		"tpm-index": {
			all: {src: ["libs/core/dts/**/*.d.ts"], dest: "libs/core/dts/all.d.ts"}
		}
	});
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('typescript-tpm');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('build', ['browserify:app']);
	grunt.registerTask('test', ['browserify:test']);
	grunt.registerTask('buildall', ['browserify']);
	grunt.registerTask('tpm', ['tpm-index']);
};