// Browser-based preview task
module.exports = {
  server: {
    options: {
      port: 4000,
      hostname: '0.0.0.0',
      bases: ['<%= paths.dist %>', '<%= paths.preview %>', '<%= paths.src %>'],
      server: './server.js',
      livereload: true
    }
  }
}
