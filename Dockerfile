FROM node:24-alpine

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY /public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --chown=nextjs:nodejs /.next/standalone ./
COPY --chown=nextjs:nodejs /.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV AUTH_SECRET=dummysecret
ENV AUTH_TRUST_HOST=true
ENV AUTH_URL=http://localhost:3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]