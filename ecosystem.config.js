module.exports = {
  apps: [
    {
      name: 'app',
      script: './node_modules/.bin/next',
      args: 'start',
      interpreter: '/bin/bash',
      exec_mode: 'cluster',
      max_memory_restart: '500M',
    },
  ],
}
