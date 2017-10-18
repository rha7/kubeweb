#!/bin/sh
set -e

cat > /usr/local/apache2/htdocs/app-env.js << EOT_RUNNER
window.appEnv = {
    api_host: "${REACT_APP_API_HOST}",
    api_port: "${REACT_APP_API_PORT}"
}
EOT_RUNNER

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

exec httpd -DFOREGROUND
