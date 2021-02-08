import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
    async createGqlOptions(): Promise<GqlModuleOptions> {
        return {
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
                outputAs: 'class',
            },
            context: ({ req, connection }) => {
                if (connection) {
                    return { req: connection.context };
                }
                return { req };
            },
            debug: true,
            installSubscriptionHandlers: true,
            introspection: true,
            playground: {
                settings: {
                    'editor.cursorShape': 'line', // possible values: 'line', 'block', 'underline'
                    'editor.fontFamily': `'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace`,
                    'editor.fontSize': 14,
                    'editor.reuseHeaders': true, // new tab reuses headers from last tab
                    'editor.theme': 'dark', // possible values: 'dark', 'light'
                    'general.betaUpdates': false,
                    'queryPlan.hideQueryPlanResponse': false,
                    'request.credentials': 'include', // possible values: 'omit', 'include', 'same-origin'
                    'tracing.hideTracingResponse': true,
                },
            },
        };
    }
}
