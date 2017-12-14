package com.smart_museum.service;

import java.util.List;

import com.smart_museum.entity.Evidence;

public interface IEvidenceService {
     List<Evidence> getAllEvidences();
     Evidence getEvidenceById(int evidenceId);
     boolean addEvidence(Evidence evidence);
     void updateEvidence(Evidence evidence);
     void deleteEvidence(int evidenceId);
}
