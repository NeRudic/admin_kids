import { createFamilyService } from "../services/familiesService.js";

class FamiliesController {
  async createFamily(req, res) {
    try {
      const result = await createFamilyService({ ...req.body });
      res.status(201).json({ message: result });
    } catch (e) {
      res
        .status(500)
        .json({ message: `Family create has failed with error: ${e.message}` });
    }
  }
}

export default new FamiliesController();
