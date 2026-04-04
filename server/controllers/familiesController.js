import { createFamily } from "../services/familiesService.js";

class FamiliesController {
  async createFamily(req, res) {
    createFamily({ ...req.body });
  }
}

export default new FamiliesController();
