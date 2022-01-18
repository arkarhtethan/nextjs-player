import { validateRoute } from "../../lib/auth";

export default validateRoute((req: any, res: any, user: any) => res.json(user))