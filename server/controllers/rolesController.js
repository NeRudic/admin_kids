import { getRolesService } from "../services/rolesService.js";

class RolesController {
  async getRoles(req, res) {
    try {
      const roles = await getRolesService();
      res.status(200).json({ message: roles });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

export default new RolesController();
