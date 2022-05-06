module.exports = {
	apps: [
		{
			name: 'server',
			script: 'pm2server.js',
			instances: 'max',
			exec_mode: 'cluster',
			out_file: './logs/out.log',
			error_file: './logs/errors.log',
			merge_logs: true,
			env: {
				NODE_ENV: 'development',
				NODE_CLUSTER_SCHED_POLICY: 'rr',
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
};
