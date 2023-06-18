/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { V1_RelationalClassQueryTempTableGraphFetchExecutionNode } from './V1_RelationalClassQueryTempTableGraphFetchExecutionNode.js';
import type { V1_SQLResultColumn } from './V1_SQLResultColumn.js';
import type { V1_TempTableStrategy } from './V1_TempTableStrategy.js';

export class V1_RelationalCrossRootQueryTempTableGraphFetchExecutionNode extends V1_RelationalClassQueryTempTableGraphFetchExecutionNode {
  parentTempTableStrategy?: V1_TempTableStrategy | undefined;
  parentTempTableName?: string | undefined;
  processedParentTempTableName?: string | undefined;
  parentTempTableColumns: V1_SQLResultColumn[] = [];
}
