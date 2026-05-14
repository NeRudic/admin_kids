import {
  createFamilyService,
  findFamilyService,
} from "../services/familiesService.js";

class FamiliesController {
  async createFamily(req, res) {
    try {
      const result = await createFamilyService({ ...req.body });
      res.status(201).json({ message: result });
    } catch (err) {
      res.status(500).json({
        message: `Family create has failed with error: ${err.message}`,
      });
    }
  }

  async findFamily(req, res) {
    try {
      const { query } = req.query;
      const result = await findFamilyService(query || "");

      res.status(200).json({ message: result });
    } catch (err) {
      res.status(500).json({
        message: `Family find has failed with error: ${err.message}`,
      });
    }
  }
}

export default new FamiliesController();
