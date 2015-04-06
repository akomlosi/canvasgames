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
					'tests/bundle/bundle.js': ['tests/tests/**/*.js', 'libs/app/**/*.js']
				}
			}
		},
		"tpm-index": {
			all: {src: ["libs/core/types/**/*.d.ts"], dest: "libs/core/types/all.d.ts"}
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