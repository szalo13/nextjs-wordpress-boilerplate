OUT_DIR=./out
BUCKET_NAME=letsremote-$NODE_ENV-website

aws s3 sync $OUT_DIR s3://$BUCKET_NAME/ \
  --delete \
  --exclude $OUT_DIR/sw.js \
  --exclude "*.html" \
  --metadata-directive REPLACE \
  --cache-control max-age=31536000,public \
  --acl public-read \
  --delete \
  --profile letsremote

aws s3 cp $OUT_DIR s3://$BUCKET_NAME/ \
  --exclude "*" \
  --include "*.html" \
  --include "$OUT_DIR/sw.js" \
  --metadata-directive REPLACE \
  --cache-control max-age=0,no-cache,no-store,must-revalidate \
  --acl public-read \
  --recursive \
  --profile letsremote

process_html_file() {
  file_path="$1"
  relative_path="${file_path#$OUT_DIR/}"
  file_name="${relative_path%.html}"

  aws s3 cp s3://$BUCKET_NAME/$file_name.html s3://$BUCKET_NAME/$file_name
}

find $OUT_DIR -type f -name "*.html" | while read -r html_file; do
  process_html_file "$html_file"
done

aws configure set preview.cloudfront true
# aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"